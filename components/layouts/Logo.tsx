import React from "react";
import Link from "next/link";
const Logo = () => {
	return (
		<Link
			href="/"
			className="group flex items-center space-x-3 shrink-0 transition-all duration-300 hover:scale-[1.03]">
			{/* AI Companion inspired icon */}
			<div className="relative">
				{/* Main circle with AI-themed gradients */}
				<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#845fff] via-[#7c3aed] to-[#845fff] dark:from-[#845fff] dark:via-[#845fff] dark:to-[#845fff] flex items-center justify-center shadow-xl shadow-purple-500/30 dark:shadow-purple-400/35 group-hover:shadow-2xl group-hover:shadow-purple-500/50 dark:group-hover:shadow-purple-400/55 transition-all duration-300 ring-2 ring-purple-500/15 dark:ring-purple-400/25 group-hover:ring-purple-500/25 dark:group-hover:ring-purple-400/35">
					<span className="text-white font-bold text-lg drop-shadow-sm">W</span>
				</div>

				{/* Voice/Audio wave indicators */}
				<div className="absolute top-0 -left-2 w-1.5 h-1.5 bg-gradient-to-br from-violet-400 to-violet-500 dark:from-pink-300 dark:to-violet-400 rounded-full shadow-sm shadow-pink-500/30 dark:shadow-violet-400/35 animate-ping delay-700"></div>

				{/* AI glow effect */}
				<div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#845fff] via-purple-400 to-transparent opacity-25 blur-md group-hover:opacity-40 animate-pulse transition-opacity duration-300"></div>
			</div>

			{/* Companion-focused typography */}
			<div className="flex items-center">
				<span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 dark:from-white dark:via-gray-50 dark:to-white bg-clip-text text-transparent group-hover:from-[#845fff] group-hover:via-[#7c3aed] group-hover:to-[#6366f1] dark:group-hover:from-[#a78bfa] dark:group-hover:via-[#c4b5fd] dark:group-hover:to-[#818cf8] transition-all duration-500 drop-shadow-sm">
					Wisera
				</span>

				{/* Voice activity indicator */}
				<div className="ml-3 flex items-center space-x-0.5">
					<div className="w-0.5 h-3 bg-gradient-to-t from-[#845fff] to-purple-400 dark:from-[#a78bfa] dark:to-purple-300 rounded-full animate-pulse opacity-70"></div>
					<div className="w-0.5 h-5 bg-gradient-to-t from-[#845fff] to-purple-400 dark:from-[#a78bfa] dark:to-purple-300 rounded-full animate-pulse delay-150 opacity-80"></div>
					<div className="w-0.5 h-4 bg-gradient-to-t from-[#845fff] to-purple-400 dark:from-[#a78bfa] dark:to-purple-300 rounded-full animate-pulse delay-300 opacity-60"></div>
					<div className="w-0.5 h-6 bg-gradient-to-t from-[#845fff] to-purple-400 dark:from-[#a78bfa] dark:to-purple-300 rounded-full animate-pulse delay-450 opacity-90"></div>
				</div>
			</div>
		</Link>
	);
};

export default Logo;
