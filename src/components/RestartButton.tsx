import { useRef } from "react";
import { MdRefresh } from "react-icons/md";
//声明刷新方法的参数类型
interface RestartButtonProps {
    onRestart: () => void;
    className?: string;
}

const RestartButton = (
    { onRestart: handleRestart, className }: RestartButtonProps
) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const handleClick = () => {
        //点击刷新后从按钮上移除焦点
        buttonRef.current?.blur();
        handleRestart();
    }
    return (
        <button
            ref={buttonRef}
            className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
            onClick={handleClick}
        >
            <MdRefresh className="w-6 h-6" />
        </button>
    );
};

export default RestartButton;