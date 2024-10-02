import React, { useEffect, useRef } from 'react';


type LiteYouTubeWrapperProps = {
  videoId: string;
  title: string;
  poster?: string;
  className?: string;
  onClick?: () => void;
};

const LiteYouTubeWrapper: React.FC<LiteYouTubeWrapperProps> = ({
  videoId,
  title,
  poster = 'maxresdefault',
  className,
  onClick,
}) => {
  const liteYTRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (liteYTRef.current) {
      // Asegurarse de registrar el custom element si aún no lo está
      if (!customElements.get('lite-youtube')) {
        import('@justinribeiro/lite-youtube');
      }
    }
  }, []);

  return (
    <lite-youtube
      ref={liteYTRef}
      videoid={videoId}
      videotitle={title}
      poster={poster}
       class={className}
      onClick={onClick}
    />
  );
};

export default LiteYouTubeWrapper;


// como LiteYouTubeEmbed se está importando directamente del módulo @justinribeiro/lite-youtube, pero esa biblioteca no provee una implementación compatible con React como un componente JSX. En lugar de utilizarlo directamente como un componente JSX, necesitamos integrar este componente de otra manera, como con custom elements o utilizando React.createElement.

// la Solución
//fue crear este componente wrapper para LiteYouTubeEmbed en React utilizando React.forwardRef. Esto nos permitirá utilizar el componente LiteYouTubeEmbed dentro de React y configurarlo de manera correcta.