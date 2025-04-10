import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "KM";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setProgress((index / fullText.length) * 100);
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    if (onComplete) {
                        onComplete();
                    }
                }, 1000);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center text-gray-900 bg-[#030517]">
            {/* Full Gradient Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Loading Content */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 px-4 py-8">
                {/* Typing Effect */}
                <div className="text-5xl font-bold tracking-wide text-white">
                    <span className="text-white">{text}</span>
                    <span className="ml-1 animate-blink">|</span>
                </div>

                {/* Loading Bar */}
                <div className="relative w-[220px] h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-black shadow-[0_0_8px_#2563eb] transition-all duration-300 ease-in-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Subtle Pulse Animation */}
                <p className="text-sm text-gray-300 animate-pulse">Loading, please wait...</p>
            </div>
        </div>
    );
};
