import { createCard } from './card'

export default {
    title: 'Design System/Atoms/Card',
    // argTypes: {
    //     label: {
    //         name: 'label',
    //         control: {
    //             type: 'text'
    //         }
    //     },
    //     size: {
    //         name: 'size',
    //         options: ['small', 'medium', 'large'],
    //         control: {
    //             type: 'radio'
    //         }
    //     }
    // }
}

const Template = ({label, ... args}) => {
    return createCard({label, ...args})
}

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    description: 'descripcion'
}