import Link from "next/link";

const Page = () => {
    return (
        <div>
            <ul className='mt-10'>
                <li><Link href='/dashboard/users'>Users</Link></li>
                <li><Link href='/dashboard/analytics'>Analytics</Link></li>
            </ul>

        </div>
    );
};

export default Page;