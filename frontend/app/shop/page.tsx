import { toast } from "react-hot-toast"
export default function Home() {

	const buySomething = async () => {
		fetch("/api/purchase")
			.then(res => res.json())
			.then(async res => {
				await navigator.clipboard.writeText(window.origin + "/" + res.referralId)
				toast.success("Copied!")
			})
			.catch(toast.error)
	}

	return (
		  <main className="flex min-h-screen flex-col items-center justify-between p-24">
			  <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
				  <div>
					  <div className={"w-[30px] h-[50px] bg-[#333]"}></div>
					  <button className={"p-2 border-2 mt-2 border-amber-100"} onClick={buySomething}>buy now</button>
				  </div>
			  </div>

		  </main>
		
	)
}
