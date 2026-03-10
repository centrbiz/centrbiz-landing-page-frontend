import type { LucideIcon } from "lucide-react";
import {
	Activity,
	CalendarClock,
	ClipboardList,
	LayoutGrid,
	Package,
	Stethoscope,
	UsersRound,
} from "lucide-react";

import { BrandLogo } from "@/components/site/brand-logo";
import { SectionHeading } from "./section-heading";

type OrbitModule = {
	name: string;
	icon: LucideIcon;
	iconClassName: string;
	glowClassName: string;
	lineColor: string;
};

const modules: OrbitModule[] = [
	{
		name: "POS",
		icon: LayoutGrid,
		iconClassName: "text-cb-primary",
		glowClassName: "bg-cb-primary/18",
		lineColor: "rgba(30, 99, 181, 0.34)",
	},
	{
		name: "Inventory",
		icon: Package,
		iconClassName: "text-cb-tech",
		glowClassName: "bg-cb-tech/18",
		lineColor: "rgba(27, 132, 214, 0.34)",
	},
	{
		name: "Booking",
		icon: CalendarClock,
		iconClassName: "text-cb-sky",
		glowClassName: "bg-cb-sky/22",
		lineColor: "rgba(111, 212, 255, 0.36)",
	},
	{
		name: "Queue",
		icon: UsersRound,
		iconClassName: "text-cb-green",
		glowClassName: "bg-cb-green/18",
		lineColor: "rgba(67, 176, 92, 0.34)",
	},
	{
		name: "Reports",
		icon: Activity,
		iconClassName: "text-cb-teal",
		glowClassName: "bg-cb-teal/18",
		lineColor: "rgba(39, 179, 168, 0.34)",
	},
	{
		name: "CRM",
		icon: ClipboardList,
		iconClassName: "text-cb-primary",
		glowClassName: "bg-cb-primary/16",
		lineColor: "rgba(30, 99, 181, 0.3)",
	},
	{
		name: "Clinic",
		icon: Stethoscope,
		iconClassName: "text-cb-green",
		glowClassName: "bg-cb-green/16",
		lineColor: "rgba(67, 176, 92, 0.3)",
	},
];

const canvasWidth = 960;
const canvasHeight = 560;
const centerX = canvasWidth / 2;
const centerY = 280;
const orbitRadius = 252;
const startAngle = -90;

const orbitModules = modules.map((module, index) => {
	const angle =
		((startAngle + (index * 360) / modules.length) * Math.PI) / 180;
	const x = Math.round(Math.cos(angle) * orbitRadius);
	const y = Math.round(Math.sin(angle) * orbitRadius);

	return { ...module, x, y };
});

export function Ecosystem() {
	return (
		<section className="section-shell scroll-mt-28 py-16" id="platform">
			<SectionHeading
				eyebrow="Platform Ecosystem"
				title="CentrBiz Connects Every Core Module in One Unified Flow"
				description="Operate from one source of truth where data moves seamlessly between sales, stock, bookings, and customer operations."
				align="center"
			/>

			<div className="relative mx-auto hidden justify-center xl:flex">
				<div className="cb-section h-[640px] w-[960px] justify-center p-0">
					<div
						className="pointer-events-none absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cb-primary/20"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute left-1/2 top-1/2 h-[388px] w-[388px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cb-tech/20"
						aria-hidden
					/>
					<div
						className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cb-green/15"
						aria-hidden
					/>

					<svg
						className="pointer-events-none absolute inset-0 h-full w-full"
						viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
						aria-hidden
					>
						{orbitModules.map((item) => (
							<g key={`line-${item.name}`}>
								<line
									x1={centerX}
									y1={centerY}
									x2={centerX + item.x}
									y2={centerY + item.y}
									stroke={item.lineColor}
									strokeWidth="2.5"
									strokeDasharray="8 8"
									strokeLinecap="round"
								/>
								<circle
									cx={centerX + item.x}
									cy={centerY + item.y}
									r="4"
									fill={item.lineColor}
								/>
							</g>
						))}
					</svg>

					<article className="absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full aspect-square border-2 border-green-600/70 bg-white/90 text-center shadow-lift">
						<div>
							<BrandLogo
								variant="icon"
								size="xxl"
								className="mx-auto mb-0"
							/>
							<h3 className="text-xl font-semibold text-cb-text">
								CentrBiz Core
							</h3>
							<p className="mt-2 px-4 text-sm text-cb-muted">
								Unified workspace orchestration
							</p>
						</div>
					</article>

					{orbitModules.map(
						({
							name,
							icon: Icon,
							x,
							y,
							iconClassName,
							glowClassName,
						}) => (
							<article
								key={name}
								className="absolute z-20 flex min-w-[102px] -translate-y-1 flex-col items-center justify-center text-center transition hover:-translate-y-2 bg-white shadow-lg rounded-full aspect-square border-2 border-slate-300"
								style={{
									left: "50%",
									top: "50%",
									transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
								}}
							>
								<span className="relative mb-0 inline-flex h-16 w-16 items-center justify-center">
									<span
										className={`absolute inset-0 rounded-full blur-2xl ${glowClassName}`}
										aria-hidden
									/>
									<Icon
										className={`relative h-9 w-9 drop-shadow-[0_8px_20px_rgba(10,63,143,0.16)] ${iconClassName}`}
									/>
								</span>
								<p className="text-sm -mt-3 font-semibold tracking-[0.08em] text-cb-text">
									{name}
								</p>
							</article>
						),
					)}
				</div>
			</div>

			<div className="grid gap-3 sm:grid-cols-2 xl:hidden">
				<article className="cb-card-soft p-4 text-center sm:col-span-2">
					<BrandLogo
						variant="icon"
						size="md"
						className="mx-auto mb-2"
					/>
					<h3 className="text-lg font-semibold text-cb-text">
						CentrBiz Core
					</h3>
					<p className="mt-1 text-sm text-cb-muted">
						All modules connected in one workspace.
					</p>
				</article>

				{modules.map(
					({ name, icon: Icon, iconClassName, glowClassName }) => (
						<article
							key={name}
							className="cb-card-soft flex min-h-[104px] items-center gap-4 p-4 transition hover:shadow-sm"
						>
							<span className="relative inline-flex h-14 w-14 items-center justify-center">
								<span
									className={`absolute inset-0 rounded-full blur-xl ${glowClassName}`}
									aria-hidden
								/>
								<Icon
									className={`relative h-8 w-8 ${iconClassName}`}
								/>
							</span>
							<p className="text-base font-semibold text-cb-text">
								{name}
							</p>
						</article>
					),
				)}
			</div>
		</section>
	);
}
