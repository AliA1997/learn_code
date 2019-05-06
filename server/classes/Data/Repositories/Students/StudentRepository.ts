import Context from '../../context';
import IStudentRepository from './IStudentRepository';
import Student from '../../../Domain/Users/Student';
import ProgrammingLanguage from '../../../Domain/ProgrammingLanguages/PLItem';
import FavoriteTutorial from '../../../Domain/Users/FavoriteTutorial';
import Author from '../../../Domain/Tutorials/Author';
import LearnCodeUser from '../../../Domain/LearnCodeUser';


export default class StudentRepository implements IStudentRepository {
    constructor() {
        this.context = new Context();
    }

    context: Context;

    getAllStudents() {
        return this.context.students().then(studentResult => {

            return studentResult.map(student => {
                    let studentToReturn = new Student(
                                            student.name, student.displayname, student.email,
                                            student.intro, student.avatar, student.pushnotificationtoken, student.occupation,
                                            student.education, student.programmingexperience, 
                                            student.favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                            student.role, student.favoritetutorials.map(favTutorial => new FavoriteTutorial(
                                                favTutorial.link,
                                                favTutorial.title,
                                                favTutorial.subject, 
                                                favTutorial.author
                                            )),
                                            student.subscription,
                                            null, 
                                            student.id
                                        );

                    return studentToReturn;
            
            });
        })
        .catch(error => {

            return error;
        
        });
    }

    getStudent(id: Number) {
        return this.context.student(id).then(studentResult => {
                
                const studentToReturn = new Student(
                                            studentResult[0].name, studentResult[0].displayname,
                                            studentResult[0].email, studentResult[0].intro, studentResult[0].avatar,
                                            studentResult[0].pushnotificationtoken, studentResult[0].occupation, studentResult[0].education,
                                            studentResult[0].programmingexperience, 
                                            studentResult[0].favoriteprogramminglanguages.map(pl => new ProgrammingLanguage(pl.image, pl.name)),
                                            studentResult[0].role, 
                                            studentResult[0].favoritetutorials.map(favTut => new FavoriteTutorial(favTut.link,
                                                                                                                    favTut.title,
                                                                                                                    favTut.subject,
                                                                                                                    new Author(
                                                                                                                        favTut.author.id,
                                                                                                                        favTut.author.name,
                                                                                                                        favTut.author.avatar
                                                                                                                    )
                                                                                                                )
                                                                                                            ),
                                            studentResult[0].subscription,
                                            null,
                                            studentResult[0].id
                                        );

                return studentToReturn;

        }).catch(err => {
            
            return err;
        
        });
    }

}