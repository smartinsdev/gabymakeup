
const Section = ({ children, bg }) => {
    return (
        <div className="py-16 max-w">
            <div className={bg?
                `container m-auto px-6 ${bg}` : "container m-auto px-6"}>
                { children }
            </div>
      </div>
    )
}

export default Section;