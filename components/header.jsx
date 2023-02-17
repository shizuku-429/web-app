import Link from "next/link"
import Image from "next/image"

const Header = () => {
    return (
        <header>
            <div><Link href="/"><Image src="/logo_jizaie.png" width={70} height={70} alt="header-img"/></Link></div>
            <nav>
                <ul>
                    <li><Link href="/">HOME</Link></li>
                    <li><Link href="/user/register">登録</Link></li>
                    <li><Link href="/user/login">ログイン</Link></li>
                    <li><Link href="/item/create">個人ページ</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header