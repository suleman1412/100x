import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
// import PetAdoptionForm from '../solution/PetAdoptionForm';
import "./myApp.css";


const App = () => {
  return (
    <div>
      <Header message={"Pet Adoption Form"} />
      <PetAdoptionForm />
    </div>
  );
};
export default App;
