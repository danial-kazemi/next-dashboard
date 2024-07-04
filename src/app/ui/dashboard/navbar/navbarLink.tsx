import Link from "next/link";

interface NavbarIconItem {
    iconItem: {
            title: string;
            link: string;
            icon: React.ReactNode;
        }      
}
function NavbarLink({iconItem} : NavbarIconItem) {
  return (
    <Link href={iconItem.link}>
        {iconItem.icon}
    </Link>
  )
}

export default NavbarLink