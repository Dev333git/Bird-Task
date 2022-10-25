import React from "react";

// images
import logo from "../../images/logo-removebg-preview (1) 2.png";
import notify from "../../images/Vector.png"

// material ui
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Membership from "../Membership/Membership";
import Kyc from "../Kyc/Kyc";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className="homeBox">
                <div className="header">
                    <div className="header1">
                        <img src={logo} alt="" />
                        <h2>Ramera Industries</h2>
                    </div>
                    <div className="header2">
                        <img src={notify} alt="" />
                        <div className="dropHead">
                            <select>
                                <option>
                                    English (UK)
                                </option>
                                <option>None</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="homeGrid">
                    <div className="homeGrid1">
                        <div className="dropDown">
                            <select>
                                <option>
                                    Profile
                                </option>
                                <option>None</option>
                            </select>
                        </div>
                        <div className="dropDown">
                            <select>
                                <option>
                                    Projects
                                </option>
                                <option>None</option>
                            </select>
                        </div>
                        <div className="dropDown">
                            <select>
                                <option>
                                    Finance
                                </option>
                                <option>None</option>
                            </select>
                        </div>
                        <div className="dropDown">
                            <select>
                                <option>
                                    Support
                                </option>
                                <option>None</option>
                            </select>
                        </div>
                    </div>
                    <div className="homeGrid2">
                        <div className="contentBox">
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="tabBar">
                                        <Tab label="KYC" {...a11yProps(0)} />
                                        <Tab label="Membership" {...a11yProps(1)} style={{ marginLeft: "250px" }} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0}>
                                    <Kyc />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Membership />
                                </TabPanel>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}