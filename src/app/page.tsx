import Image from "next/image";
import Style from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li><Link href="/">Home</Link> </li>
        <li> <Link href="/authentication">Authentication</Link></li>
        <li> <Link href="/Dashbord">Dasboard</Link></li>
        <li> <Link href="/supervisor">Supervisor</Link></li>
        <li> <Link href="/technician">Technician</Link></li>
        <li> <Link href="/inventory_employee">Inventory Employee</Link></li>
        <li> <Link href="/services">Services</Link></li>
      </ul>

    </div>
  );
}
