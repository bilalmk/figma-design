import Link from "next/link";
export default function Header(data: { font: { className: string; }; }) {
    return (
    <>
    <div className={`${data.font.className} div`}>
        <ul className="Links">
            <li className="link"><Link href="#">Works</Link></li>
            <li className="link"><Link href="#">Blog</Link></li>
            <li className="link"><Link href="#">Contact</Link></li>
        </ul>
    </div>
    </>
    );
  }
