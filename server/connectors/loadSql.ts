//Import your QueryFile from your pg-promise to load sql files, and export a function to use for all sql files.
import { QueryFile } from 'pg-promise';
export default function(file: any) {
    //Return the sql file minified.
    return new QueryFile(file, {minify: true});
}

export function getPath(path: string, type: string) {
    //Have the basepath be the current directory name
    var basePath = path;

    if(!type) {
        //Use a regular expression to replace the connectors from the current path..
        basePath = basePath.replace(/connectors/, "");
        basePath = basePath.replace(/dbImports/, '');
    }

    return basePath;
}