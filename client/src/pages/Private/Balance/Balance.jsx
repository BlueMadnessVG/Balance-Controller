import nothing_img from "../../../assets/img/nothing_img.jpg";

function Balance() {
  return (
    <div className="bg-slate-100 w-full h-full flex flex-col items-center justify-center p-2">
      <img
        src={nothing_img}
        alt="nothing to see here"
        className="w-[100px] h-[100px] md:w-[8vw] md:h-[8vw] object-fill rounded-xl"
      />
      <span className="text-slate-400">
        This is supposed to be the BALANCE page but is under progress, so there
        is nothing in it..... yet.
      </span>
    </div>
  );
}
export default Balance;
