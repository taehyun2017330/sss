import React, { useState, useEffect } from 'react';

const ChristmasSnowflake = () => (
  <div className="absolute animate-float">
    <div className="w-4 h-4 text-white opacity-50">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2.01c-.27 0-.54.07-.78.21L3.77 7.72c-.48.28-.77.79-.77 1.34v5.88c0 .55.29 1.06.77 1.34l7.44 5.5c.24.14.51.21.78.21s.54-.07.78-.21l7.44-5.5c.48-.28.77-.79.77-1.34V9.06c0-.55-.29-1.06-.77-1.34l-7.44-5.5c-.24-.14-.51-.21-.78-.21zm0 2.14l6.4 4.73v4.24l-6.4 4.73-6.4-4.73V8.88l6.4-4.73z"/>
      </svg>
    </div>
  </div>
);

const ChristmasLetter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [elementPositions, setElementPositions] = useState({});
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    const updateElementPositions = () => {
      const positions = {};
      sections.forEach((_, index) => {
        const element = document.getElementById(`section-${index}`);
        if (element) {
          positions[index] = element.offsetTop;
        }
      });
      setElementPositions(positions);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateElementPositions);
    
    handleScroll();
    updateElementPositions();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateElementPositions);
    };
  }, []);

  const sections = [
    {
      id: 1,
      type: 'text',
      content: "What I love about 소영...",
      align: 'center',
    },
    {
      id: 2,
      type: 'text',
      content: "소영이는 사람들이 창피한 순간에도 편하게 해주는 재주가 있어요",
      align: 'left',
    },
    {
      id: 3,
      type: 'image',
      src: "/sss/1.gif",
      alt: "Comfortable moments"
    },
    {
      id: 4,
      type: 'text',
      content: "주변 친구들 이야기를 진심을 다해 들어주고, 극 F로 공감도 잘해줘요 가끔은 친구들 고민에 너무 몰입해서 기가 빨릴때도 있지만요",
      align: 'right',
    },
    {
      id: 5,
      type: 'image',
      src: "/sss/2.png",
      alt: "Empathetic listening"
    },
    {
      id: 6,
      type: 'text',
      content: "우리 소영이는 두명의 동생의 든든한 맏언니지만 장난기도 엄청많고 아직 미자 동생들보다 더 순수할때도 있어요",
      align: 'left',
    },
    {
      id: 7,
      type: 'image',
      src: "/sss/3.png",
      alt: "Playful moments"
    },
    {
      id: 8,
      type: 'text',
      content: "신나게 놀다가 기운 떨어지면 푹 자고",
      align: 'right',
    },
    {
      id: 9,
      type: 'image',
      src: "/sss/4.gif",
      alt: "Peaceful rest"
    },
    {
      id: 10,
      type: 'text',
      content: "배고프면 배고프다고 응애해요",
      align: 'left',
    },
    {
      id: 11,
      type: 'image',
      src: "/sss/5.gif",
      alt: "Hungry moments"
    },
    {
      id: 12,
      type: 'text',
      content: "승부욕도 있어서 펀치머신이랑 농구 게임도 잘하고",
      align: 'right',
    },
    {
      id: 13,
      type: 'image',
      src: "/sss/6.png",
      alt: "Competitive spirit"
    },
    {
      id: 14,
      type: 'text',
      content: "공부도 잘하는데 나랑 시간 보내느라 다른 로스쿨 애들만큼은 못해도 할 수 있는 만큼 해내려고 노력하는 우리 소영이가 참 예뻐요",
      align: 'left',
    },
    {
      id: 15,
      type: 'image',
      src: "/sss/7.png",
      alt: "Study moments"
    },
    {
      id: 16,
      type: 'text',
      content: "이런 잠도많고 재밌고 사랑스럽고 승부욕이 넘치는 소윙이가 내 곁에 있어 행복해요",
      align: 'right',
    },
    {
        id: 17,
        type: 'image',
        src: "/sss/9.png",
        alt: "Study moments"
      },
    {
      id: 18,
      type: 'text',
      content: "매일 더 사랑스러워지는 우리 소영이와 함께하는 첫 크리스마스",
      align: 'left',
    },
    {
      id: 19,
      type: 'image',
      src: "/sss/8.png",
      alt: "Christmas together"
    },
    {
      id: 20,
      type: 'text',
      content: "Merry Christmas, I love you",
      align: 'center',
    }
  ];

  const TextSection = ({ content, align, opacity }) => (
    <div 
      className={`w-full px-4 sm:px-8 transition-all duration-1000 transform
        ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 50}px)`
      }}
    >
      <p className="text-xl sm:text-2xl leading-relaxed text-gray-800 max-w-3xl mx-auto">
        {content}
      </p>
    </div>
  );

  const ImageSection = ({ src, alt, opacity }) => (
    <div 
      className="w-full px-4 sm:px-8 transition-all duration-1000"
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 50}px)`
      }}
    >
      <div className="max-w-lg mx-auto">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );

  const FinalChristmasMessage = ({ opacity }) => (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-700 to-green-800 overflow-hidden"
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 50}px)`
      }}
    >
      {/* Snowflakes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `-${Math.random() * 5}s`
          }}
        >
          <ChristmasSnowflake />
        </div>
      ))}
      
      {/* Message */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-white mb-8 animate-pulse">
          Merry Christmas
        </h1>
        <div className="space-y-8">
          <p className="text-4xl text-white animate-bounce">
            I love you
          </p>
          <div className="mt-8 max-w-xs mx-auto">
            <img
              src="/final-photo.png"  // Replace with your actual photo path
              alt="Final Christmas Photo"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const calculateOpacity = (index) => {
    if (index === 0) {
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.2;
      
      if (scrollPosition < scrollThreshold) {
        return 1;
      } else {
        return Math.max(0, 1 - ((scrollPosition - scrollThreshold) / windowHeight));
      }
    }

    const windowHeight = window.innerHeight;
    const elementPosition = elementPositions[index] || 0;
    const elementTop = elementPosition - scrollPosition;
    
    // Reduced sensitivity by increasing these values
    const fadeInStart = windowHeight * 1.5;
    const fullyVisible = windowHeight * 0.8;
    const fadeOutStart = windowHeight * -0.2;
    const fadeOutEnd = windowHeight * -0.5;  // Decreased from -0.5

    if (elementTop <= fadeInStart && elementTop >= fullyVisible) {
      return 1 - ((elementTop - fullyVisible) / (fadeInStart - fullyVisible));
    } else if (elementTop <= fadeOutStart && elementTop >= fadeOutEnd) {
      return (elementTop - fadeOutEnd) / (fadeOutStart - fadeOutEnd);
    } else if (elementTop < fadeOutEnd || elementTop > fadeInStart) {
      return 0;
    }
    return 1;
  };
  
  return (
    <div className="bg-white overflow-x-hidden">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
            100% { transform: translateY(0) rotate(360deg); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
      <main className="min-h-screen">
        <section
          id="section-0"
          className="h-screen flex items-end justify-center pb-32"
        >
          <TextSection 
            content={sections[0].content}
            align={sections[0].align}
            opacity={calculateOpacity(0)}
          />
        </section>

        {sections.slice(1, -1).map((section, index) => {
          const opacity = calculateOpacity(index + 1);

          return (
            <section
              id={`section-${index + 1}`}
              key={section.id}
              className="min-h-screen flex items-center justify-center py-16"
            >
              {section.type === 'text' ? (
                <TextSection 
                  content={section.content}
                  align={section.align}
                  opacity={opacity}
                />
              ) : (
                <ImageSection 
                  src={section.src}
                  alt={section.alt}
                  opacity={opacity}
                />
              )}
            </section>
          );
        })}

        {/* Final Christmas Message Section */}
        <section
          id={`section-${sections.length - 1}`}
          className="min-h-screen"
        >
          <FinalChristmasMessage opacity={calculateOpacity(sections.length - 1)} />
        </section>
      </main>

      <footer className="fixed bottom-0 w-full bg-white bg-opacity-90 p-4">
        <p className="text-center text-gray-600">
          Scroll to continue reading ↓
        </p>
      </footer>
    </div>
  );
};

export default ChristmasLetter;