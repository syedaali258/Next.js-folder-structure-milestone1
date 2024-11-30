 import Link from "next/link";
 
 
 export default function Home() {
  return (
    <div>
      <h1 className="text-oragne-500">Hello World!</h1>
      <Link className="mr-5 hover:text-blue-900" href={"/"}>Home</Link>
      <Link className="mr-5 hover:text-pink-900" href={"aboutus.tsx"}>About Us</Link>
      <Link className="mr-5 hover:text-orange-900" href={"contactus.tsx"}>Contact Us</Link>
      <Link className="mr-5 hover:text-green-900" href={"privacypolicy.tsx"}>Privacy Policy</Link>
    </div>
  )
}