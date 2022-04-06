import classes from './About.module.css';
import PageHeader from './../Pageheader/PageHeader';
import me from './../../img/me.jpg';

const About = () => {
    return ( 
        <div className = {classes.About} id="about">
            <PageHeader title = {'About'}/>
            <div className = {classes.Container}>
                <div className= {classes.Text}>
                    <h2> Hello! im Jorge!</h2>
                    <p>
                        I am currently a student of the trade of software engieneering, a developer in the making you might say. Currently working as a service technician in HVAC  but have found a new love for coding and it all started with a friend of mine putting me onto this field.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;