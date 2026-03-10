import Image from "next/image";

type BrandLogoProps = {
	variant?: "horizontal" | "stacked" | "icon";
	size?: "sm" | "md" | "lg" | "xl" | "xxl";
	className?: string;
};

const sizeMap = {
	sm: { icon: 30, text: "text-xl" },
	md: { icon: 38, text: "text-[1.75rem]" },
	lg: { icon: 48, text: "text-[2rem]" },
	xl: { icon: 60, text: "text-[2.5rem]" },
	xxl: { icon: 72, text: "text-[3rem]" },
};

export function BrandLogo({
	variant = "horizontal",
	size = "md",
	className = "",
}: BrandLogoProps) {
	const config = sizeMap[size];

	if (variant === "icon") {
		return (
			<Image
				src="/brand/centrbiz-icon.svg"
				alt="CentrBiz"
				width={config.icon}
				height={config.icon}
				className={className}
			/>
		);
	}

	if (variant === "stacked") {
		return (
			<div
				className={`inline-flex flex-col items-center gap-1 ${className}`}
			>
				<Image
					src="/brand/centrbiz-icon.svg"
					alt="CentrBiz"
					width={72}
					height={72}
				/>
				<p
					className={`${config.text} font-semibold tracking-tight leading-none`}
				>
					<span className="text-[#0A3F8F]">Centr</span>
					<span className="text-[#43B05C]">Biz</span>
				</p>
			</div>
		);
	}

	return (
		<div className={`inline-flex items-center gap-1 ${className}`}>
			<Image
				src="/brand/centrbiz-icon.svg"
				alt="CentrBiz"
				width={config.icon}
				height={config.icon}
			/>
			<p
				className={`${config.text} font-semibold tracking-tight leading-none`}
			>
				<span className="text-[#0A3F8F]">Centr</span>
				<span className="text-[#43B05C]">Biz</span>
			</p>
		</div>
	);
}
