import Img01 from '/KeyInitiatives-Img/WOMEN_LEADERS_REPORT.jpg'
import Img02 from '/KeyInitiatives-Img/UGC Regulation Final.jpg'
import Img03 from '/KeyInitiatives-Img/MP2.png'
import Img04 from '/KeyInitiatives-Img/NHEQF.png'
import Img05 from '/KeyInitiatives-Img/Promotion_of_Physical_Fitness.png'
import Img06 from '/KeyInitiatives-Img/Indian_Knowledge_System.png'
import Img07 from '/KeyInitiatives-Img/National_Credit_Framework.png'
import Img08 from '/KeyInitiatives-Img/CUET2022.jpg'
import Img09 from '/KeyInitiatives-Img/6347789_RDC-Guideline.jpg'
import Img10 from '/KeyInitiatives-Img/Multiple Entry-Exit.jpg'
import Img11 from '/KeyInitiatives-Img/Internationalization of Higher education.jpg'
function KeyInitiatives() {
  return (
    <div>
      <div className="bg-[url(/KeyInitiatives-Img/services2.jpg)] w-100% p-20">
        <h1 className="text-white text-5xl font-bold ml-10">Key Initiatives</h1>
      </div>
      <div className="p-10">
        <p  className="bg-[#ff6c3a] w-25 p-3 rounded-4xl text-center cursor-pointer text-white">Back</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img01} alt="" className='w-70  rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Women Leaders: Shaping Academic Excellence for Viksit Bharat @ 2047</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img02} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Compendium of UGC Regulations 1957-2023</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <div className='w-70 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>List of Eligible Indian institutions to collaborate as per Regulations on Academic Collaboration between Indian and Foreign HEIs to offer Twinning, Joint Degree and Dual Degree Programmes in 2022 with foreign institutions.</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img03} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Guidelines on Mulya Pravah 2.0 - Inculcation of Human Values and Professional Ethics in Higher Education Institutions</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img04} alt="" className='w-70  rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>National Higher Education Qualifications Framework</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img05} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Guidelines for Promotion of Physical Fitness, Sports, Students' Health, Welfare, Psychological and Emotional Well-Being at HEI of India</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img06} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Guidelines for Training/Orientation of Faculty on Indian Knowledge System (IKS)</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img07} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>National Credit Framework (NCrF)</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-5">
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img08} alt="" className='w-70  rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>One Nation One Entrance Exam CUET</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img09} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Research Development Cells</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img10} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Multiple Entry and Exit in Academic Programmes</p>
          </div>
        </div>
        <div className="border-2 border-red-600 cursor-pointer">
          <img src={Img11} alt=""  className='w-70 rounded-lg'/>
          <div className='w-61 text-[#524e61] font-bold mx-auto text-2sm p-3'>            
          <p>Guidelines for Internationalisation of Higher Education in India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyInitiatives;
