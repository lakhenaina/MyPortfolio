import { FiSmartphone, FiCode, FiServer } from 'react-icons/fi'

function AboutSection() {
  return (
    <section className="text-slate-200">
      <div className="mb-6">
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          I&apos;m an aspiring frontend developer focused on building modern, user‑focused
          web applications with React. I enjoy turning ideas into clean, responsive
          interfaces and continuously improving my skills through real projects.
        </p>

        <p className="mt-3 text-2sl font-bold text-yellow-600">
          I&apos;m actively looking for opportunities to apply my skills, learn from
          real‑world projects, and grow as a developer.
        </p>
      </div>

      {/* What I'm Doing */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-50 mb-3">
          What I&apos;m Doing
        </h3>

        <div className="grid gap-4 md:grid-cols-2 ">
          <ServiceCard
            icon={<FiSmartphone className="text-5xl text-yellow-600 " />}
            title="Mobile-Friendly Web Apps"
            description="Building responsive interfaces that look great on phones, tablets, and desktops."
          />
          <ServiceCard
            icon={<FiCode className="text-5xl text-yellow-600" />}
            title="Web Development"
            description="Creating modern React applications with clean, reusable components."
          />
          <ServiceCard
            icon={<FiServer className="text-5xl text-yellow-600" />}
            title="Frontend Integration"
            description="Connecting frontends with APIs and handling data in a user‑friendly way."
          />
        </div>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-50 mb-8 flex-shrink-0">
          Skills
        </h3>

        <div className="flex flex-wrap gap-10 pl-6">
          <SkillCard
            icon={
              
              <img className='h-25'
              src='src/assets/react.webp'></img>
              // TEMP: replace with <img src="/skills/react.png" ... /> later
            }
          />
           <SkillCard 
            icon={ 
               <img className='h-25'
               src='src/assets/javascript.png'></img>
            }
          />
          <SkillCard
            icon={
              <img className='h-25'
              src='src/assets/mysql.webp'></img>
            }
          />
          <SkillCard
            icon={
              <img className='h-20'
              src='src/assets/tailwind.png'></img>
            }
          />
         
         
        </div>

        {/* bottom bar */}
       
         
        </div>
      
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="flex gap-3 rounded-2xl bg-zinc-800 p-4 shadow-[0_0_25px_rgba(0,0,0,0.6)] h-38 ">
      <div className="mt-6 flex h-10 w-10 items-center justify-center ml-5">
        {icon }
      </div>
      <div>
        <h4 className="text-xm font-semibold text-slate-50 mt-4">{title}</h4>
        <p className="mt-1 text-xm text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

function SkillCard({ icon }) {
  return (
    <div className="flex h-28 w-35 items-center justify-center rounded-4xl bg-zinc-800 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
      {icon}
    </div>
  )
}

export default AboutSection