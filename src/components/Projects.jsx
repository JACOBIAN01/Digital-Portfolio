import MedCareImage from "../assets/MedCareImage.webp"
import MovieImage from "../assets/MovieImage.png"


function ProjectPage(){
    return (
      <>
        <div className="text-center font-bold text-2xl">
          <h2 className="bg-black text-white p-3">Explore Projects</h2>
        </div>
        <div className="container flex gap-5">
          <div className="bg-blue-900 text-white rounded-sm">
            <img className="w-auto h-48 object-cover" src={MovieImage} />
            <div className="text-center font-semibold gap-5">
              <div>BioScope</div>
              <p>Description</p>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-sm">
            <img className="w-auto h-48 object-cover" src={MedCareImage} />
            <div className="text-center font-semibold gap-5">
              <div>MedCare</div>
              <p>Description</p>
            </div>
          </div>
        </div>
      </>
    );
}


export default ProjectPage;

