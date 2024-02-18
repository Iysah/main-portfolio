import Image from "next/image";
import zorftsLogo from "../assets/zorftsIcon.png";
import bgBig from "../assets/bgBig.png";

function Maintenance() {
	return (
		<>
			<div className="font-sans">
				<Image src={zorftsLogo} className="mt-5 ml-24" />

				<h1 className="text-6xl font-bold text-h1-black text-center mb-4">
					Oops! Maintanence mode.
				</h1>
				<p className="text-base text-center text-text-ash leading-5">
					We are currently under maintenance, our teams are working hard to{" "}
					<br /> get the site running again.
				</p>
				<div className="flex justify-center w-100%">
					<div>
						<div className="flex mt-8 justify-center">
							<Image src={bgBig} />
						</div>
					</div>

					<div className="40%">
						<div className=" ml-auto mr-auto">
							<form
								action=""
								className=" w-full flex flex-col justify-self-center mt-8 ">
								<div>
									<input
										type="text"
										placeholder="Full name"
										className="border border-border-ash rounded-xl pr-[477px] pl-8 pt-4 pb-4 "
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Company's name"
										className="border border-border-ash rounded-xl pr-[477px] pl-8 pt-4 pb-4 mt-4"
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Address"
										className="border border-border-ash rounded-xl pr-[477px] pl-8 pt-4 pb-4 mt-4 mb-4"
									/>
								</div>
								<div>
									<textarea
										name=""
										id=""
										className="border border-border-ash rounded-xl pr-80 pl-8 pt-4 pb-4 "
										placeholder="How may we help you?"
										cols="43"
										rows="10"></textarea>
								</div>
								<div className="ml-auto mr-auto mt-20 ">
									<button className="text-white bg-button-bg-blue  pl-64 pr-72 pt-5 pb-5 mt-4 rounded-2xl ">
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Maintenance;
