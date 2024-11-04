import { URL_WHATSAPP } from '@/constants/service.constant';
import { baseService } from '@/Services/base.service';
import { useEffect, useState } from 'react'
import QRCode from 'qrcode';

export const QrCode = () => {
    const [qrCode, setQrCode] = useState('');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchQRCode = async () => {
            try {
                const response:any = await baseService(URL_WHATSAPP+"qrcode").get()
                setIsReady(response.isReady)
                const qrCodeImage = await QRCode.toDataURL(response.qr, { type: 'image/png' });
                setQrCode(qrCodeImage);
            } catch (error) {
                console.error('Error fetching QR code:', error);
            }
        };
        const interval = setInterval(fetchQRCode, 9000); // Reintentar cada segundo
        if(isReady){
            clearInterval(interval);
        }
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <div>
            {(qrCode && !isReady) ? (
                <img src={qrCode} alt="Código QR" />
            ) : (
                <>
                    {
                        !isReady ? (
                            <p>Cargando código QR...</p>
                        ) : (
                            <p>el cliente de whastapp fue cargado</p>
                        )
                    }
                </>
            )}
        </div>
    );
}
