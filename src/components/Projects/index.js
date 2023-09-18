import './index.scss'


const Projects = () => {
  const projects = [
    {
      title: "Tech Blog",
      image:"../../assets/images/github2.png",
      deployedLink: "https://project1.com",
      githubLink: "https://github.com/kingcaliente/Tech-Blog"
    },
    {
      title: "Quiz App",
      image: "path/to/image2",
      deployedLink: "https://kingcaliente.github.io/quiz-game/",
      githubLink: "https://github.com/kingcaliente/quiz-game"
    },
    {
      title: "Text Editor",
      image: "path/to/image3",
      deployedLink: "https://github.com/kingcaliente/mod19",
      githubLink: "https://github.com/kingcaliente/mod19"
    },
    {
      title: "Stream App",
      image: "path/to/image4",
      deployedLink: "https://project4.com",
      githubLink: ""
    },
    {
      title: "Read Me Generator",
      image: "path/to/image5",
      deployedLink: "https://github.com/kingcaliente/README-generator",
      githubLink: "https://github.com/kingcaliente/README-generator"
    },
    {
      title: "Weather Dashboard",
      image: "path/to/image6",
      deployedLink: "https://github.com/kingcaliente/weather-dashboard",
      githubLink: "https://github.com/kingcaliente/weather-dashboard"
    }
  ];

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>Portfolio Of Work</h1>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <a href={project.deployedLink}>Deployed App</a>
            <a href={project.githubLink}>GitHub Repository</a>
          </div>
        ))}
      </div>
    </div>
  );
}



      export default Projects;