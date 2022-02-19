export const DashboardCardIndicator = ({value, title, subtitle, textColor}) => {
    return (
        <div className="p-4 card">
            <div className="text-center">
                <div className={`my-4 text-4xl font-bold ${textColor}`}>
                    {value}
                </div>

                <span className="font-bold">{title}</span>
                <p className="text-gray-600">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

DashboardCardIndicator.defaultProps = {
    textColor: 'text-blue-500'
}