import Navbar from "../component/Navbar"
import "./Home.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="sobre-mim">
                <img src="./Erika.jpeg" alt="" />
                <div>
                    <h1>Olá, eu me chamo Erika!</h1>
                    <p>Estudante do 3º semestre de Desenvolvimento de Software Multiplataforma na FATEC São José dos Campos, onde desenvolvi meus principais conhecimentos: Metodologia ágil, Typescript, React, Python, MySQL, HTML, CSS e Figma. Abaixo estão minhas experiências na faculdade.</p>
                </div>
            </div>
            <div className="projetos">
                <div className="crianca-renal">
                    <video 
                        src="./sprint4.mp4"
                        controls
                    />
                    <div>
                        <h1>Criança Renal | 2023.2</h1>
                        <hr />
                        
                        <h2>Descrição do Projeto</h2>
                        <p>Criança Renal é um blog informativo criado em parceria com a FATEC e com mães de crianças que enfrentam a doença renal crônica. Além de oferecer informações detalhadas sobre a doença e apresentar dados estatísticos que destacam seu impacto negativo na população, o blog também serve como um espaço de acolhimento. Nele, as mães podem compartilhar suas histórias e fortalecer uma rede de apoio mútua, unindo-se para enfrentar esse desafio de forma mais solidária e colaborativa. <a href="https://github.com/TeamHiveAPI/API-2023.2?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o repositório.</a></p>
                        
                        <h2>Tecnologias utilizadas</h2>
                        <p>HTML | CSS | JavaScript | Figma | Bootstrap | Python | Flask | MySQL</p>

                        <h2>Contribuições Pessoais</h2>
                        <p>Desenvolver a Criança Renal foi díficil pois, por nunca ter tido um contato significativo com programação antes, acabei direcionando meu foco para os aspectos errados. Em vez de fortalecer minha lógica de programação, acabei concentrando meus esforços na estilização do site. Embora isso tenha contribuído para a apresentação visual, percebi mais tarde que deixar de priorizar a lógica foi uma falha que impactou meu aprendizado inicial negativamente.Além disso, a dinâmica do meu grupo apresentou situações injustas. Percebi que havia um tratamento diferente entre amigos próximos, que recebiam mais flexibilidade e compreensão, enquanto os demais membros do grupo eram tratados de forma rigorosa, o que frequentemente gerava brigas e atritos desnecessários. Apesar disso, minha contribuição foi significativa na parte visual do projeto, onde trabalhei ativamente com CSS e HTML.</p>

                        <p><strong>Hard Skills Efetivamente Desenvolvidas: </strong>HTML, CSS, MySQL</p>
                        <p><strong>Soft Skills Efetivamente Desenvolvidas: </strong>Desenvolvi minha <strong>capacidade de autocrítica</strong> ao perceber que foquei excessivamente na estilização do site, deixando a lógica de programação em segundo plano. Essa reflexão me ensinou a equilibrar esforços e priorizar o que realmente impacta o aprendizado e o desenvolvimento do projeto, algo que levei para futuras API's.
                        </p>
                    </div>
                </div>
                <div className="internet-ocean">
                    <div>
                        <h1>Internet Ocean | 2024.1</h1>
                        <hr />
                        
                        <h2>Descrição do Projeto</h2>
                        <p>Internet Ocean é uma solução eficiente para o gerenciamento de chamados, projetada para otimizar o atendimento e proporcionar uma experiência mais fluida e organizada. Com ele, os usuários podem abrir chamados de maneira simples, enquanto a equipe de suporte os atende com agilidade, oferecendo respostas claras e suporte completo para resolver dúvidas e solucionar problemas. Embora tenha sido desenvolvido inicialmente para redes de internet, o Internet Ocean é uma ferramenta versátil, capaz de atender às necessidades de qualquer setor que exija um gerenciamento eficiente de chamados. <a href="https://github.com/CoddingWarriors/Api_CoddingWarriors/tree/main?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o repositório.</a></p>
                        
                        <h2>Tecnologias utilizadas</h2>
                        <p>HTML | CSS | JavaScript | Figma | Node.JS | TypeScript | React | MySQL</p>

                        <h2>Contribuições Pessoais</h2>
                        <p>Desenvolver a Internet Ocean foi um grande desafio para mim, especialmente porque o projeto foi realizado em um grupo pequeno, com apenas cinco integrantes. Contudo, o número de pessoas que realmente contribuíram ativamente foi ainda menor, o que acabou concentrando em mim uma grande parte das atividades. Desde a primeira sprint até a última, estive fortemente envolvida no desenvolvimento, o que me manteve atenta aos erros na API, principalmente porque um dos integrantes frequentemente subia códigos com erros no GitHub ou realizava as tasks de forma funcional, mas incorreta. Apesar disso, tive o suporte valioso de um colega que me ajudou muito no backend, contribuindo significativamente para superar os desafios dessa parte do projeto. No geral, além de colaborar no desenvolvimento backend, fui responsável por prototipar o projeto no Figma, realizar toda a estilização do site e assumir o papel de Product Owner, garantindo a qualidade e funcionalidade do resultado final.</p>

                        <p><strong>Hard Skills Efetivamente Desenvolvidas: </strong>Figma, Typescript, React</p>
                        <p><strong>Soft Skills Efetivamente Desenvolvidas: </strong>Desenvolvi minha <strong>resiliência</strong> ao enfrentar constantes desafios no projeto, como erros enviados ao github e a alta demanda de tarefas. Com isso, aprendi a lidar com a pressão e encontrar soluções, uma habilidade que se tornou útil no meu dia a dia.</p>
                    </div>
                    <video 
                        src="./internet-ocean.webm"
                        controls
                    />

                </div>
                <div className="fapg">
                    <video 
                        src="./fapg.webm"
                        controls
                    />

                    <div>
                        <h1>Portal de transparência FAPG | 2024.2</h1>
                        <hr />
                        
                        <h2>Descrição do Projeto</h2>
                        <p>O portal de transparência da FAPG foi um projeto desenvolvido em conjunto com a Fundação de Apoio à Pesquisa de Pós-Graduandos com foco na segurança e acessibilidade. Aproveitando as tecnologias e linguagens de programação mais recentes, buscando oferecer uma plataforma robusta e confiável, que facilite o acesso às informações públicas de maneira transparente e eficiente. <a href="https://github.com/A-Sync-Fatec/api-fatec-3sem-24" target="_blank" rel="noopener noreferrer">Clique aqui para acessar o repositório.</a></p>
                        
                        <h2>Tecnologias utilizadas</h2>
                        <p>HTML | CSS | Java | Spring | Figma | TypeScript | React | MySQL</p>

                        <h2>Contribuições Pessoais</h2>
                        <p>No início do projeto da FAPG, o grupo enfrentou dificuldades com a entrega de tarefas, a comunicação fora da faculdade e a proatividade de todos os membros. Essa situação levou um membro central a decidir sair do grupo, o que, por sua vez, fez com que outros participantes também se retirassem, desestruturando a equipe. Diante disso, decidimos unir nosso grupo, que havia ficado reduzido, a outro grupo que também contava com poucos integrantes. Após a junção dos grupos, a dinâmica mudou, resultando em melhorias na organização e na eficiência do projeto. A divisão de tarefas tornou-se mais clara, a comunicação fluiu melhor, e todos passaram a contribuir para o projeto. No início, fiz o mockup do Figma e assumi o papel de Product Owner. Após mudar o papel para desenvolvedor, contribuí ativamente no frontend, utilizando CSS, HTML, Typescript e React. Após as modificações de membros do grupo, além de continuar ajudando no frontend, passei a contribuir mais ativamente no backend, utilizando Java Spring Boot e MySQL.</p>

                        <p><strong>Hard Skills Efetivamente Desenvolvidas: </strong>Java, Spring Boot</p>
                        <p><strong>Soft Skills Efetivamente Desenvolvidas: </strong>Desenvolvi minha <strong>flexibilidade</strong> ao adaptar minha atuação no projeto diante das mudanças na equipe e das necessidades do grupo. Inicialmente, assumi o papel de Product Owner, fazendo a criação do mockup no Figma. No entanto, ao perceber a demanda por desenvolvedores ativos, mudei de cargo para desenvolvedor e comecei a contribuir ativamente no frontend. Com as modificações na composição do grupo, passei a atuar no backend, onde mais precisava de desenvolvedores.</p>                        
                    </div>

                </div>
            </div>
        </div>
    )
}