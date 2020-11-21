import React from 'react'

const index = ({ name, ...props }) => {
	const _handleSelectPath = {

		campaing:require('../../assets/images/Backgrounds/campaign_launch_flatline.svg'),
		startup:require('../../assets/images/Backgrounds/startup.svg'),
		ecommerce:require('../../assets/images/Backgrounds/ecommerce.svg'),
		designer:require('../../assets/images/Backgrounds/user_interface.svg'),
		developer:require('../../assets/images/Backgrounds/Web developer.svg'),
		training:require('../../assets/images/Backgrounds/world_wide_web.svg'),

		linkendin: require('../../assets/images/Icons/Linkeding.svg'),
		instagram:require('../../assets/images/Icons/Instagram.svg'),
		twitter:require('../../assets/images/Icons/Twitter.svg'),
		flag:require('../../assets/images/Icons/Flag.svg'),
		flag2:require('../../assets/images/Icons/FlagEnglish.svg'),
		logo:require('../../assets/images/Icons/LogoWhite.svg'),
		logoPrimary:require('../../assets/images/Logo.svg'),
		fex:require('../../assets/images/Icons/Clients/fex.svg'),
		davidvas:require('../../assets/images/Icons/Clients/DavidVas.svg'),
		poetri:require('../../assets/images/Icons/Clients/poetri.svg'),
		celagem:require('../../assets/images/Icons/Clients/celagem.png'),
		nativo:require('../../assets/images/Icons/Clients/nativo.svg'),
		
	}
	return <img src={_handleSelectPath[name]} {...props} alt={name} />
}

export default index
