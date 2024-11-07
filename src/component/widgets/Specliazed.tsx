import Wrapper from "@/component/shared/wrapper"
const Specliazed = () => {
  return (
<section>
    <Wrapper>
        {/* header */}
        <div>
        <h2 className="text-4xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
        <p className="mt-6 text-xl text-slate-700">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
        </div>
<div className="mt-10">

        {/* Contant left */}
        <div className="shadow-xl rounded-xl border-slate-200 py-8 px-6">
<h4 className=" text-[#00616C] text-lg">Web 3.0 (Blockchain) and Metaverse Specialization</h4>
<h3 className="text-2xl font-semibold ">Header</h3>
<p className="text-lg text-slate-600 mt-2"></p>
<button className="text-[#00616C] text-xl mt-4 underline flex gap-x-2 items-end ">learn more
<svg  width="10" height="13" viewBox="0 0 24 24" focusable="false" className="mb-1.5 chakra-icon group-hover:translate-x-0.5 duration-300 css-onkibi" aria-hidden="true"><path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
</button>
</div>



        {/* Contant Right */}
        </div>
    </Wrapper>
</section>



  )
}

export default Specliazed