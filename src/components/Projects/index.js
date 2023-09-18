const Projects = () => {
    const projects = [
      {
        title: "Project 1",
        image: "path/to/image1",
        deployedLink: "https://project1.com",
        githubLink: "https://github.com/user/project1"
      },
      {
        title: "Project 2",
        image: "path/to/image2",
        deployedLink: "https://project2.com",
        githubLink: ""
      },
      {
        title: "Project 3",
        image: "path/to/image3",
        deployedLink: "https://project3.com",
        githubLink: ""
      },
      {
        title: "Project 4",
        image: "path/to/image4",
        deployedLink: "https://project4.com",
        githubLink: ""
      },
      {
        title: "Project 5",
        image: "path/to/image5",
        deployedLink: "https://project5.com",
        githubLink: ""
      },
      {
        title: "Project 6",
        image: "path/to/image6",
        deployedLink: "https://project6.com",
        githubLink: ""  
      }
    ];
  
    return (
      <div className="text-zone">
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