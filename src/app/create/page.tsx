import Header from "./header";

export default function Create() {
    return (
        <>
            <Header />
            <div className="py-8">
                <div className="max-w-screen-2xl px-4 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
                    <div>
                        <div>
                            <div className="h-32 w-28 border rounded"></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
}
