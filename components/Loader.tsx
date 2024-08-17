import Image from "next/image";

export default function Loader() {
    return (
        <div className="loader">
            <Image src="/assets/icons/loader.svg" alt="Loader" width={32} height={32} className="animate-spin" />
            Loading...
        </div>
    );
}
