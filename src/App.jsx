import "./App.css";
import Menu from "./composants/menu";
import Hero from "./composants/hero";
import Skills from "./composants/skills";
import { listMenu } from "./data/menuData";
import { badgeHero } from "./data/badgeHeroData";
import { projetData } from "./data/projetData";
import Projet from "./composants/projet";
import { ArrowUp } from 'lucide-react';


export default function App() {
  return (
    <div>
      <header className="bg-sky-900 shadow-md px-10 border">
        <div className="navbar px-6">
          <div className="flex-1">
            <a className="text-xl font-bold"><img src="/public/assets/logo.png" height={30} width={30} alt="logo" /></a>
          </div>

          {/* Menu pour desktop */}
          <div className="hidden lg:flex bg-sky-900">
            <ul className="menu menu-horizontal px-1 uppercase gap-4">
              {listMenu.map((menu) => (
                <Menu key={menu.id} {...menu} />
              ))}
            </ul>

          </div>

          {/* Menu burger pour mobile */}
          <div className="lg:hidden p-0 bg-sky-900 dropdown dropdown-center">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-900 rounded-box w-52 uppercase"
            >
              {listMenu.map((menu) => (
                <Menu key={menu.id} {...menu} />
              ))}
            </ul>
          </div>
        </div>
      </header>
      <section className="h-screen bg-sky-900 text-white px-24 flex justify-center items-center">
        <div className="w-full flex max-md:flex-col max-md:items-center items-center justify-between">
          <div className="flex flex-col gap-y-6 overflow-hidden">
            <div className="">
              <p className="font-light text-4xl">Hey there! I'm</p>
              <h1 className="font-semibold text-7xl max-md:text-5xl">Yorick MOUSSAVOU</h1>
              <p className="font-medium text-4xl">Développeur fullstack</p>
            </div>
            <div className="flex justify-start items-center gap-6">
                {badgeHero.map((badge) =>(
                  <Hero key={badge.id} {...badge}/>
                ))} 
            </div>
        </div>
        <div>
          <img src="/public/assets/profil-gyo (2).jpeg" alt="profil" className="max-md:hidden h-70 w-70 rounded-bl-full hover:scale-110 duration-1000 transition-all ease-in-out"/>
          <img src="/public/assets/profil-gyo (2).jpeg" alt="profil" className="max-md:hidden h-70 w-70 rounded-tr-full hover:scale-110 duration-1000 transition-all ease-in-out"/>
        </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen md:min-h-[500px] bg-gray-100 p-10">
        <h2 className="text-3xl text-center text-sky-900 font-bold mb-20">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Skills
            titre="Front End"
            skills={["React", "Tailwind", "Figma", "HTML/CSS"]}
          />
          <Skills
            titre="Back End"
            skills={["Node.js", "Express", "MongoDB", "REST API"]}
          />
          <Skills
            titre="Autres"
            skills={["GitHub", "Figma", "Notion", "Vite"]}
          />
        </div>
      </section>

      <section id="projets" className="min-h-screen md:min-h-[500px] bg-sky-900 p-10">
        <h2 className="text-3xl text-center text-white font-bold mb-20">Projets</h2>
        <div className="grid grid-cols-1 place-items-center md:flex justify-center items-center gap-6 mt-10">
          {projetData.map((projet) =>(
          <Projet key={projet.id} {...projet} />
        ))}
        </div>
      </section>

      <section id="contact" className="relative min-h-screen md:min-h-[500px] p-10 bg-[url(public/assets/bg-contact.jpeg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 bg-opacity-1"></div>
        <h2 className="text-3xl text-center text-sky-900 font-bold mb-20">Contact</h2>
        <div className="flex justify-center items-center gap-12">
          {badgeHero.map((badge) =>(
          <Hero key={badge.id} {...badge}/>
        ))} 
        </div>
      </section>
      
      <section id="faq" className="min-h-screen md:min-h-[500px] flex flex-col justify-start items-center bg-sky-900 p-10">
        <h2 className="text-3xl font-bold mb-15 text-white">FAQ</h2>
        <div className="flex justify-center p-6">
          <div className="join join-vertical w-full max-w-2xl bg-white shadow-xl rounded-3xl border border-gray-200 overflow-hidden">
            
            <div className="collapse collapse-arrow join-item">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg font-semibold bg-blue-100 hover:bg-blue-200 transition-all duration-200">
                Année de naissance ?
              </div>
              <div className="collapse-content text-gray-700 bg-white px-5 py-3 text-base">
                15 novembre 2000.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-semibold bg-blue-100 hover:bg-blue-200 transition-all duration-200">
                Lieux de formation ?
              </div>
              <div className="collapse-content text-gray-700 bg-white px-5 py-3 text-base">
                INSG et Ecole241.
              </div>
            </div>

            <div className="collapse collapse-arrow join-item">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg font-semibold bg-blue-100 hover:bg-blue-200 transition-all duration-200">
                Formation ?
              </div>
              <div className="collapse-content text-gray-700 bg-white px-5 py-3 text-base">
                Informatique de gestion et Développeur Web & Mobile.
              </div>
            </div>

          </div>
        </div>

      </section>
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        <p className="text-sm">&copy; 2025 Yorick MOUSSAVOU. Tous droits réservés.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://github.com/tonprofil" target="_blank" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank" className="hover:text-white">LinkedIn</a>
          <a href="#top" className="hover:text-white flex items-center gap-2">
            Retour en haut <ArrowUp /></a>
        </div>
      </footer>

    </div>
  );
}
