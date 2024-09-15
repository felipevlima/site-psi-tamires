import { useState } from "react"
import { AbordagemDiv, AboutMeDiv, Button, HeroImage, InputContainer, InputField, MenuLink, TextAreaField } from "./styles"

function App() {
  const cellphoneNumber = 5571983243215
  const [name, setName] = useState('')
  const [messager, setMessager] = useState('')

  const whatsAppLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(cellphoneNumber)}&text=${encodeURIComponent(`Olá, me chamo ${name}. ${messager}`)}`
  const whatsAppLinkWithoutMessage = `https://api.whatsapp.com/send?phone=${encodeURIComponent(cellphoneNumber)}`

  return (
    <div className="w-full h-full scroll-smooth">
      <header className="px-4 md:px-8 xl:px-40 bg-background h-16 flex items-center justify-center">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-brown-text text-2xl font-serif">Tamires Brito</h1>
          <nav className="hidden md:block">
            <ul className="flex gap-11">
              <li>
                <MenuLink href="#sobre-mim" className="text-brown-text text-base font-bold">Sobre mim</MenuLink>
              </li>
              <li>
                <MenuLink href="#abordagens" className="text-brown-text text-base font-bold">Abordagem</MenuLink>
              </li>
              <li>
                <MenuLink href="#contato" className="text-brown-text text-base font-bold">Contato</MenuLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="w-full flex items-start justify-center py-4 md:py-8 xl:py-16">
        <div className="px-4 md:px-8 xl:px-40 grid grid-cols-1 md:grid-cols-12 xl:gap-x-5">
          <div className="order-2 md:order-1 col-start-1 col-end-7 flex flex-col items-start justify-center gap-4 md:gap-6 lg:gap-8">
            <hr className="border-t-4 border-brown-text w-1/3 md:w-full" />
            <h1 className="font-serif font-bold text-brown-text text-5xl lg:text-7xl leading-snug">Psicóloga <br />Tamires Brito</h1>
            <p className="text-opacity-85 font-sans font-semibold text-base lg:text-xl text-secondary-text pb-4 md:pb-8 leading-normal">Bem-vindo ao meu espaço de cuidado e bem-estar emocional. Com apoio psicologico personalizado para ajudar você a enfrentar desafios, promover autoconhecimento e alcançar uma vida mais equilibra e feliz.</p>
            <a href="#sobre-mim" className="flex items-center justify-center w-full lg:w-80 bg-transparent hover:bg-button-green/10 text-button-green font-semibold py-3 md:py-4 px-12 border border-button-green rounded-xl shadow-md">Saiba mais</a>
          </div>
          <div className="mb-6 md:mb-0 order-1 md:order-2 col-start-1 col-end-12 md:col-start-8 lg:col-start-8 md:col-end-13 w-full flex items-center justify-center">
            <div className="relative h-[460px] w-full lg:h-[670px] lg:w-[500px] rounded-full">
              <div className="absolute top-0 right-0 md:-top-4 md:-right-2 lg:top-6 lg:right-2 bg-custom-pink rounded-full w-24 h-24 shadow-[0px_10px_20px_4px_#00000024]"></div>
              <HeroImage  src="hero-1.JPG"/>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre-mim" className="w-full flex items-start justify-center py-4 md:py-8 xl:py-16 bg-secondary-background">
        <div className="px-4 md:px-8 xl:px-40 grid grid-cols-1 md:grid-cols-12 lg:gap-x-5">
          <div className="h-[454px] lg:h-[550px] xl:h-[700px] mb-6 md:mb-0 order-1 col-start-1 col-end-12 md:col-start-1 md:col-end-6 w-full flex items-center justify-center">
            <AboutMeDiv src="about-me.JPG" />
          </div>
          <div className="order-2 md:order-1 col-start-1 col-end-12 md:col-start-7 md:col-end-13 flex flex-col items-start justify-start gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brown-text leading-snug mb-3">Sobre mim</h1>
              <hr className="border-t-4 border-brown-text w-full" />
            </div>
            <p className="text-opacity-85 font-sans font-semibold text-base md:text-sm lg:text-base xl:text-xl text-secondary-text pb-8 leading-normal">
              Sou psicóloga especializada na abordagem de Análise do Comportamento e ofereço acompanhamento psicoterapêutico personalizado. Minha prática é focada em ajudar indivíduos a superar desafios emocionais e comportamentais, promovendo bem-estar e qualidade de vida.
              <br />
              <br />
              Tenho vasta experiência em tratar questões como depressão, estresse, ansiedade, angústia e compulsões alimentares, entre outros problemas relacionados. Utilizo técnicas baseadas em evidências científicas para desenvolver estratégias eficazes e adaptadas às necessidades de cada cliente.
              <br />
              <br />
              Estou comprometida em proporcionar um ambiente acolhedor e seguro, onde você pode explorar suas preocupações e trabalhar em direção a uma vida mais equilibrada e satisfatória.
            </p>
          </div>
        </div>
      </section>
      <section id="abordagens" className="w-full flex items-start justify-center py-4 md:py-8 xl:py-16">
        <div className="px-4 md:px-8 xl:px-40 grid grid-cols-1 md:grid-cols-12 xl:gap-x-5">
          <div className="order-2 md:order-1 col-start-1 col-end-7 flex flex-col items-start gap-2">
            <h1 className="text-4xl font-serif font-bold text-brown-text md:text-5xl leading-snug mb-3">Minha abordagem</h1>
            <hr className="border-t-4 border-brown-text w-10/12 md:w-8/12 mb-4" />
            <h3 className="font-sans font-bold text-2xl text-brown-text mt-2 md:mb-2 ">Analise do Comportamento</h3>
            <p className="text-opacity-85 font-sans font-semibold text-base md:text-sm lg:text-base xl:text-xl text-secondary-text pb-8 leading-normal">
              Na abordagem de Análise do Comportamento, focamos em entender e modificar padrões de comportamento para promover mudanças positivas e duradouras. Utilizamos técnicas baseadas em evidências científicas para identificar os fatores que influenciam o comportamento e desenvolver estratégias personalizadas para cada indivíduo.
              <br />
              <br />
              Nosso objetivo é ajudar nossos clientes a alcançar seus objetivos pessoais e profissionais, melhorando a qualidade de vida e o bem-estar geral. Através de uma análise detalhada e intervenções específicas, trabalhamos para criar um ambiente que favoreça o desenvolvimento e a manutenção de comportamentos desejáveis.
            </p>
          </div>
          <div className="h-[460px] lg:h-[600px] mb-6 md:mb-0 order-1 md:order-2 col-start-1 col-end-12 md:col-start-8 lg:col-start-8 md:col-end-13 w-full flex items-center justify-center">
              <AbordagemDiv src="abordagem.JPG"/>
          </div>
        </div>
      </section>
      <section id="contato" className="w-full flex items-start justify-center py-4 md:py-8 xl:py-16 bg-secondary-background">
        <div className="w-full px-4 md:px-8 xl:px-40 grid grid-cols-1 md:grid-cols-12 xl:gap-x-5">
          <div className="col-start-1 col-end-12 w-full flex flex-col items-start gap-4 mb-6">
            <hr className="border-t-4 border-brown-text w-3/12" />
            <h1 className="text-4xl font-serif font-bold text-brown-text md:text-5xl leading-snug">Agende uma consulta</h1>
          </div>
          <div className="mb-6 md:mb-0 order-1 md:order-1 col-start-1 col-end-6 md:col-end-7 lg:col-end-6 xl:col-end-5 flex flex-col items-start justify-center gap-4 md:gap-6 lg:gap-8">
            <InputContainer>
              <span>Nome</span>
              <InputField type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
            </InputContainer>
            <InputContainer>
              <span>Mensagem</span>
              <TextAreaField placeholder="Digite sua mensagem" onChange={e => setMessager(e.target.value)}/>
            </InputContainer>
            <Button href={whatsAppLink} target="__blank">Enviar</Button>
          </div>
          <div className="order-2 md:order-2 col-start-1 col-end-12 md:col-start-8 lg:col-start-7 md:col-end-13 w-full flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-start gap-4">
              <h3 className="text-lg font-serif font-bold text-brown-text md:text-2xl leading-snug">Redes sociais</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/psi_tamiresbrito" target="__blank" className="text-lg text-button-green hover:text-custom-pink flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
                <a href={whatsAppLinkWithoutMessage} target="__blank" className="text-lg text-button-green hover:text-custom-pink flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
         </div>
      </section>
      <footer className="w-full h-28 bg-secondary-background flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-header-background">Copyright © 2024 Psi Tamires Brito</p>
      </footer>
    </div>
  )
}

export default App
