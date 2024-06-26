import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";

const Results = ({ errors, accuracyPercentage, total, className }: {
    errors: number,
    accuracyPercentage: number,
    total: number,
    className?: string
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const duration = { opacity: 0.3 };

    return (

        <motion.ul className={`${className} flex flex-col items-center
         dark:text-primary-400 text-green-500 space-y-3`}>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0 }}>Results</motion.li>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 0.5 }}>Accuracy: {formatPercentage(accuracyPercentage)}</motion.li>
            <motion.li className="text-red-500" initial={initial} animate={animate} transition={{ ...duration, delay: 1 }}>Errors: {errors}</motion.li>
            <motion.li initial={initial} animate={animate} transition={{ ...duration, delay: 1.4 }}>Typed: {total}</motion.li>
        </motion.ul >
    )
}

export default Results