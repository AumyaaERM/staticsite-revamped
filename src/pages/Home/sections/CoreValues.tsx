
export function CoreValues() {
  const valuesLeft = [
    { src: '/images/home/INTEGRITY.png', width: 'w-[7%]', height: 'h-auto', margin: 'my-[1%] ml-[5%] mr-[5%]' },
    { src: '/images/home/CLIENT-CENTRIC.png', width: 'w-[10%]', height: 'h-[12%]', margin: 'my-[1%] mr-[7%]' },
    { src: '/images/home/Pasted Graphic 8.png', width: 'w-[4%]', height: 'h-[5%]', margin: 'my-[1%] mr-[25%]' }
  ];

  const valuesRight = [
    { src: '/images/home/QUALITY.png', width: 'w-[5%]', height: 'h-[6%]', margin: 'my-[1%] mr-[7%]' },
    { src: '/images/home/INNOVATION.png', width: 'w-[7%]', height: 'h-[5%]', margin: 'my-[1%] mr-[5%]' },
    { src: '/images/home/SUSTAINABILITY.png', width: 'w-[9%]', height: 'h-[5%]', margin: 'my-[1%]' }
  ];

  return (
    <div className="min-h-[10vw] flex relative bg-white flex-col">
      <div className="min-h-[6vh] flex relative my-[2.5%] bg-[#fcd421] items-center">
        {valuesLeft.map((value, idx) => (
          <img
            key={idx}
            src={value.src}
            alt="Core value"
            className={`block relative h-auto object-contain ${value.width} ${value.margin}`}
          />
        ))}
        {valuesRight.map((value, idx) => (
          <img
            key={idx}
            src={value.src}
            alt="Core value"
            className={`block relative h-auto object-contain ${value.width} ${value.margin}`}
          />
        ))}
      </div>
      {/* Core Values circle with dotted border */}
      <div 
        className="absolute w-[18%] ml-[41%] top-1/2 -translate-y-1/2 aspect-square rounded-full flex items-center justify-center"
        style={{
          border: '3px dotted #C9A800',
          padding: '8px'
        }}
      >
        <img 
          src="/images/home/core values.png"
          alt="Core Values"
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    </div>
  );
}