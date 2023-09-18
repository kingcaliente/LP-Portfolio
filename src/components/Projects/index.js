const Projects = () => {
    const projects = [
      {
        title: "Project 1",
        image: "path/to/image1",
        deployedLink: "https://project1.com",
        githubLink: "https://github.com/user/project1"
      },
      // Add other projects similarly
    ];
  
    return (
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <a href={project.deployedLink}>Deployed App</a>
            <a href={project.githubLink}>GitHub Repository</a>
          </div>
        ))}
      </div>
    );
  };

  export default Projects;