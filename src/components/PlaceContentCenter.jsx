export default function PlaceContentCenter({ children }) {
    return (
        <div className={'bg-black'}>
            <div
                className={
                    'bg-purple-200 text-violet-50 min-h-screen flex items-center justify-center antialiased tracking-tight'
                }
            >
                <div className={'max-w-lg w-full'}>{children}</div>
            </div>
        </div>
    );
}
