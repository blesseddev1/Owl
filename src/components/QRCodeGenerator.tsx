import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeGeneratorProps {
  value: string;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value, size = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      // Adjust size for mobile devices
      const actualSize = window.innerWidth < 640 ? Math.min(size, 180) : size;
      
      QRCode.toCanvas(canvasRef.current, value, {
        width: actualSize,
        margin: 2,
        color: {
          dark: '#ffffff',
          light: '#1e293b'
        }
      });
    }
  }, [value, size]);

  return (
    <div className="flex justify-center p-3 sm:p-4 bg-slate-700 rounded-xl">
      <canvas ref={canvasRef} className="rounded-lg" />
    </div>
  );
};

export default QRCodeGenerator;