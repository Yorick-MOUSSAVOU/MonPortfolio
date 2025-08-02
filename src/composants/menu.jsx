export default function Menu({ name, path, icon: Icon }) {
  return (
    <li>
      <a href={path} className="flex items-center text-white gap-2 hover:text-blue-500">
        <Icon className="w-4 h-4" />
        {name}
      </a>
    </li>
  );
}
