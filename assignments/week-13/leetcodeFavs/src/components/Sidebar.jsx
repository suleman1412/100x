import { useState } from 'react'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-screen'>
      <div className={`md:w-64 md:bg-red-600 md:block transform-all duration-1000 ${isOpen ? 'translate-x-0' : '-translate-x-full'} hidden`}>
        Sidebar
      </div>
      <div className='bg-green-300 flex-1'>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-blue-500 text-white rounded">
          Toggle Sidebar
        </button>
        Content
      </div>
    </div>
  );
}

export default Sidebar;