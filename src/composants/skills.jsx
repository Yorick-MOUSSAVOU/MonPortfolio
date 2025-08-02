

function Skills({ titre, skills }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg transition-all ease-in-out shadow hover:scale-110 duration-1000  bg-sky-900 text-white">
      <h3 className="text-xl font-semibold mb-2">{titre}</h3>
      <ul className="list-disc list-inside space-y-1">
        {skills.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
