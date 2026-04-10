import React from 'react';
import exampleImage from '../assets/fox.png';
import { 
  PlusIcon, MinusIcon, EqualsIcon, MultiplyIcon, 
  DivideIcon, StarIcon, ArrowRightIcon, PencilIcon, CheckIcon 
} from './components/Icons';
import { 
  SketchyButton, SketchyCard, SketchyInput, SketchyBadge, PALETTE 
} from './components/UI';

const ColorSwatch = ({ color, name, hex }: { color: string; name: string; hex: string }) => (
  <div className="flex flex-col items-center group cursor-crosshair transition-transform hover:-translate-y-1">
    <div 
      className="w-24 h-24 mb-3 rounded-full border-4 border-[#272624] shadow-[4px_4px_0px_#272624] group-hover:shadow-[6px_6px_0px_#272624] transition-all"
      style={{ backgroundColor: color }}
    />
    <span className="font-bold text-lg text-[#272624] tracking-wider">{name}</span>
    <span className="text-sm font-medium text-[#8B8D88]">{hex}</span>
  </div>
);

const IconWrapper = ({ children, label }: { children: React.ReactNode, label: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    const svgEl = e.currentTarget.querySelector('svg');
    if (svgEl) {
      const svgString = svgEl.outerHTML;
      navigator.clipboard.writeText(svgString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      onClick={handleCopy}
      className="group relative flex flex-col items-center justify-center p-4 gap-2 hover:bg-[#FDF7E7] rounded-xl transition-colors border-2 border-transparent hover:border-[#272624] border-dashed cursor-pointer"
      title={`დააჭირეთ ${label} SVG-ის კოპირებისთვის`}
    >
      <div className="text-[#E25921]">{children}</div>
      <span className="text-sm font-bold text-[#272624]">{label}</span>
      
      {/* Tooltip Overlay */}
      <div className="absolute inset-0 bg-[#272624] text-white flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-bold">{copied ? "კოპირებულია!" : "კოპირება SVG"}</span>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div 
      className="min-h-screen p-8 md:p-16 lg:p-24 selection:bg-[#E25921] selection:text-white"
      style={{ 
        backgroundColor: PALETTE.background, 

        color: PALETTE.text,
        backgroundImage: 'radial-gradient(#8B8D88 0.5px, transparent 0.5px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center gap-12 bg-white/80 p-12 rounded-3xl border-4 border-[#272624] shadow-[8px_8px_0px_#272624] backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#E25921] border-b-4 border-[#272624]" />
          <div className="relative">
            <div className="absolute -inset-2 bg-[#DFCCA9] rounded-full blur-xl opacity-50 animate-pulse" />
            <img 
              src={exampleImage} 
              alt="მელი ფანქრით" 
              className="w-1000 h-1000 md:w-96 md:h-96 object-contain relative z-10 drop-shadow-xl hover:rotate-6 transition-transform duration-500" 
            />
          </div>
          <div className="flex-1 space-y-6 text-center md:text-left">
            <SketchyBadge className="animate-bounce"> დიზაინის სისტემა</SketchyBadge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide text-[#272624] ss-geo-chalk">
              მელი და ფანქარი <br/>
              <span className="text-[#E25921]">მათემატიკის თამაშები</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#8B8D88] max-w-xl font-medium">
              მოთამაშე, ხელით დახატული დიზაინის სისტემა, რომელიც შთაგონებულია მათემატიკის სწავლის სიხარულით სანდო ხის ფანქართან ერთად.
            </p>
          </div>
        </header>

        {/* Colors Section */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-b-4 border-[#272624] border-dashed pb-4">
            <div className="p-3 bg-[#E25921] text-white rounded-full border-2 border-[#272624]"><StarIcon size={32} /></div>
            <h2 className="text-4xl font-bold ss-geo-chalk">ფერების პალიტრა</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pt-8">
            <ColorSwatch color={PALETTE.primary} name="მელის ნარინჯისფერი" hex="#E25921" />
            <ColorSwatch color={PALETTE.primaryDark} name="დამწვარი ჩრდილი" hex="#B23A14" />
            <ColorSwatch color={PALETTE.secondary} name="ფანქრის ხე" hex="#DFCCA9" />
            <ColorSwatch color={PALETTE.accent} name="მელის მუცელი" hex="#FDF7E7" />
            <ColorSwatch color={PALETTE.background} name="ქაღალდის ფონი" hex="#F9F6EE" />
            <ColorSwatch color={PALETTE.text} name="ნახშირის მელანი" hex="#272624" />
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-b-4 border-[#272624] border-dashed pb-4">
            <div className="p-3 bg-[#DFCCA9] text-[#272624] rounded-full border-2 border-[#272624]"><PencilIcon size={32} /></div>
            <h2 className="text-4xl font-bold ss-geo-chalk">ტიპოგრაფია</h2>
          </div>
          
          <SketchyCard className="flex flex-col md:flex-row gap-12 bg-white/90 backdrop-blur">
            <div className="flex-1 space-y-8">
              <div>
                <span className="text-[#E25921] text-sm font-bold uppercase tracking-widest block mb-2 ss-geo-chalk">პირველადი შრიფტი (სათაურები)</span>
                <p className="text-6xl font-bold ss-geo-chalk">SS Geo Chalk</p>
                <p className="text-[#8B8D88] mt-2 text-sm mecomicse">ამ შრიფტით გამოსახულია სათაურები და UI ელემენტები, რომლებიც სანამ მეტ ყურადღებას იქცევენ.</p>
              </div>
              <div className="space-y-6 border-l-4 border-[#E25921] pl-6">
                <h1 className="text-5xl font-bold ss-geo-chalk">H1. მათემატიკა სახალისოა!</h1>
                <h2 className="text-4xl font-bold ss-geo-chalk">H2. დაითვალე მელები</h2>
                <h3 className="text-3xl font-bold ss-geo-chalk">H3. დონე 1 დასრულებული</h3>
              </div>
            </div>
            
            <div className="flex-1 space-y-8 border-t-4 border-dashed border-[#272624] pt-8 md:pt-0 md:border-t-0 md:border-l-4 md:pl-12">
               <div>
                <span className="text-[#E25921] text-sm font-bold uppercase tracking-widest block mb-2 mecomicse">მეორადი შრიფტი (სხეული და ქვედა სათაურები)</span>
                <p className="text-5xl mecomicse">TF Mecomicse</p>
                <p className="text-[#8B8D88] mt-2 text-sm mecomicse">ეს არის ქართული Mecomicse შრიფტი, რომელიც შესაფერისია სხეული ტექსტისთვის, ინსტრუქციებისთვის და მოთხრობის ელემენტებისთვის.</p>
              </div>
              <div className="mecomicse text-2xl leading-relaxed space-y-4 text-[#272624]">
                <p>კეთილი იყოს თქვენი მობრძანება მელების აკადემიაში! დღეს ჩვენ ვისწავლით როგორ დავამატოთ და გამოვაკლოთ.</p>
                <p>აიღეთ თქვენი ხის ფანქრები და დავიწყოთ ჩვენი პირველი თავგადასავალი.</p>
              </div>
            </div>
          </SketchyCard>
        </section>

        {/* Icons Section */}
        <section className="space-y-10">
          <div className="flex items-center gap-4 border-b-4 border-[#272624] border-dashed pb-4">
             <div className="p-3 bg-[#FDF7E7] text-[#E25921] rounded-full border-2 border-[#272624]"><PlusIcon size={32} /></div>
            <h2 className="text-4xl font-bold ss-geo-chalk">ხელით დახატული ხატულები</h2>
          </div>
          
          <div className="bg-white rounded-3xl border-4 border-[#272624] p-12 shadow-[8px_8px_0px_#272624]">
            <p className="text-xl text-[#8B8D88] mb-8 text-center max-w-2xl mx-auto">
              მორგებული SVG ხატულები, რომლებიც სპეციალურად შექმნილია მელის და ფანქრის ნახატის ესკიზური, არასრულყოფილი კონტურის დასამთხვევად. არ გამოიყენება ემოჯები ან სტანდარტული მკვეთრი კიდეების ხატულები.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
              <IconWrapper label="დამატება"><PlusIcon size={48} /></IconWrapper>
              <IconWrapper label="გამოკლება"><MinusIcon size={48} /></IconWrapper>
              <IconWrapper label="გამრავლება"><MultiplyIcon size={48} /></IconWrapper>
              <IconWrapper label="გაყოფა"><DivideIcon size={48} /></IconWrapper>
              <IconWrapper label="ტოლია"><EqualsIcon size={48} /></IconWrapper>
              <IconWrapper label="ვარსკვლავი"><StarIcon size={48} /></IconWrapper>
              <IconWrapper label="შემოწმება"><CheckIcon size={48} /></IconWrapper>
              <IconWrapper label="ისარი"><ArrowRightIcon size={48} /></IconWrapper>
              <IconWrapper label="ფანქარი"><PencilIcon size={48} /></IconWrapper>
            </div>
          </div>
        </section>

        {/* UI Components Section */}
        <section className="space-y-10 pb-24">
          <div className="flex items-center gap-4 border-b-4 border-[#272624] border-dashed pb-4">
             <div className="p-3 bg-[#272624] text-white rounded-full border-2 border-[#272624]"><CheckIcon size={32} /></div>
            <h2 className="text-4xl font-bold ss-geo-chalk">UI ელემენტები</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Buttons */}
            <SketchyCard className="space-y-8">
              <h3 className="text-2xl font-bold border-b-2 border-dashed border-[#8B8D88] pb-2 inline-block">ღილაკები</h3>
              <div className="flex flex-col gap-6 items-start">
                <div className="flex flex-wrap gap-4 items-center">
                  <SketchyButton variant="primary">თამაშის დაწყება <ArrowRightIcon size={20} className="ml-2" /></SketchyButton>
                  <SketchyButton variant="primary" size="lg">ითამაშე ახლა</SketchyButton>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  <SketchyButton variant="secondary">შედეგების ნახვა</SketchyButton>
                  <SketchyButton variant="outline">პარამეტრები</SketchyButton>
                </div>
                <SketchyButton variant="ghost">გაუქმება</SketchyButton>
              </div>
            </SketchyCard>

            {/* Form Elements */}
            <SketchyCard variant="filled" className="space-y-8">
              <h3 className="text-2xl font-bold border-b-2 border-dashed border-[#8B8D88] pb-2 inline-block">ფორმები</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-lg font-bold">მოსწავლის სახელი</label>
                  <SketchyInput placeholder="მაგ. ჩარლი" />
                </div>
                <div className="space-y-2">
                  <label className="text-lg font-bold flex justify-between">
                    <span>პასუხი</span>
                    <span className="text-[#E25921]">5 + 3 = ?</span>
                  </label>
                  <div className="flex gap-4">
                    <SketchyInput placeholder="8" type="number" className="text-center text-2xl" />
                    <SketchyButton variant="primary" className="!px-8"><CheckIcon /></SketchyButton>
                  </div>
                </div>
              </div>
            </SketchyCard>

            {/* Math Problem Card Demo */}
            <div className="md:col-span-2 mt-8">
              <div className="relative max-w-2xl mx-auto transform -rotate-1">
                <div className="absolute inset-0 bg-[#E25921] rounded-[255px_15px_225px_15px/15px_225px_15px_255px] translate-x-2 translate-y-3" />
                <SketchyCard className="relative p-12 text-center space-y-8 bg-white z-10">
                  <SketchyBadge className="absolute top-6 left-6 -rotate-6">დონე 3</SketchyBadge>
                  <div className="flex justify-center text-yellow-400 gap-2 absolute top-6 right-6">
                    <StarIcon size={28} className="text-[#E25921]" fill="#E25921" />
                    <StarIcon size={28} className="text-[#E25921]" fill="#E25921" />
                    <StarIcon size={28} className="text-[#E25921]" />
                  </div>
                  
                  <h3 className="text-3xl text-[#8B8D88]">ამოხსენი!</h3>
                  <div className="flex items-center justify-center gap-6 text-7xl font-bold text-[#272624]">
                    <span>12</span>
                    <PlusIcon size={64} className="text-[#E25921]" />
                    <span>8</span>
                    <EqualsIcon size={64} className="text-[#DFCCA9]" />
                    <div className="w-24 h-24 border-4 border-dashed border-[#272624] rounded-2xl flex items-center justify-center text-[#E25921] bg-[#FDF7E7]">
                      ?
                    </div>
                  </div>
                  <div className="pt-8">
                    <SketchyButton size="lg" className="w-full sm:w-auto px-16">პასუხის გაგზავნა</SketchyButton>
                  </div>
                </SketchyCard>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
