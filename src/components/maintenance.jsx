import Image from "next/image";
import zorftsLogo from "../assets/zorftsIcon.png";
import bgBig from "../assets/bgBig.png";

function Maintenance() {
	    // send a POST request using Fetch API 
		// fetch('https://sitebackend-api.vercel.app/contact/send', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(jsonData),
		// })

	return (
		<>
			<div className="font-sans mt-8 p-2">
				<h1 className="text-3xl sm:text-6xl font-bold text-h1-black text-center mb-4">
					Oops! Under Construction.
				</h1>
				<p className="text-base text-center text-text-ash leading-5">
					We are currently under maintenance, our teams are working hard to{" "}
					<br /> create a new experience for you.
				</p>
				<div className="flex justify-center items-center flex-col-reverse sm:flex-row w-[100%] mx-auto gap-6">
					<div className="hidden sm:block">
						<Image src={bgBig} />
					</div>

					<div className=" p-2">
						<form
							action=""
							className="w-full flex flex-col justify-self-center mt-8 ">
							<div>
								<input
									type="text"
									placeholder="Full name"
									className="border border-border-ash rounded-xl px-4 py-2 w-[100%]"
								/>
							</div>
							<div>
								<input
									type="text"
									placeholder="Subject"
									className="border border-border-ash rounded-xl px-4 py-2 w-[100%] mt-4"
								/>
							</div>
							<div>
								<input
									type="tel"
									placeholder="Phone number"
									className="border border-border-ash rounded-xl px-4 py-2 w-[100%] mt-4"
								/>
							</div>
							<div>
								<input
									type="text"
									placeholder="Email address"
									className="border border-border-ash rounded-xl px-4 py-2 w-[100%] mt-4"
								/>
							</div>
							<div>
								<textarea
									name=""
									id=""
									className="border border-border-ash rounded-xl px-4 py-2 w-[100%] mt-4 "
									placeholder="How may we help you?"
									cols="43"
									rows="10"></textarea>
							</div>
							<div className="ml-auto mr-auto mt-10 ">
								<button className="text-white bg-button-bg-blue px-4 py-2 w-[400px] mt-4 rounded-2xl ">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Maintenance;
