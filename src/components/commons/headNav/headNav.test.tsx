import { render } from "@testing-library/react"
import HeadNav from "./headNav"

describe("HeadNavigation Test",()=>{
    it("Title test",()=>{
        const utils = render(
            <HeadNav title="Nav Title Test"/>
        )
        utils.getByText('Nav Title Test')
    })
})