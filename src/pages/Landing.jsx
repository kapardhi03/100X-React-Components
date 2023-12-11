import {
  useNavigate,
} from "react-router-dom";
import Logo from "../assets/images/logo.svg"
import Button from "../components/Button";

function Header () {
  return (
    <header className="flex justify-center py-3 px-4 sm:flex-grow sm:max-w-[600px] sm:h-full">
      <img src={Logo} alt="100xLogo" className="w-12 h-auto sm:w-auto"/>
    </header>
  );
}

function MainContent () {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col px-7 justify-center items-center flex-grow text-neutral-50 sm:max-w-[424px]">
      <section className="flex flex-col self-start">
        <h2 className="text-3xl font-extrabold mb-3">Happening now</h2>
        <h3 className="font-bold">Join today.</h3>
      </section>
      <div className="my-10 w-full">
        <Button variant="default" size="xl" onClick={()=>{
          navigate('/signup')
        }}>
            Create account
        </Button>
      </div>
      <div className="flex items-center w-full mb-10">
        <div className="flex-grow border border-b border-neutral-700" />
        <div className="mx-1">or</div>
        <div className="flex-grow border border-b border-neutral-700" />
      </div>
      <div className="self-start mb-5">
        Already have an account?
      </div>
        <Button variant="outline" size="xl">
            Sign In
        </Button>
    </main>
  )
}

export default function Landing() {
  return (
    <div className="flex flex-grow flex-col sm:flex-row sm:gap-24 sm:justify-center sm:items-center">
        <Header />
        <MainContent />
    </div>
  )
}
