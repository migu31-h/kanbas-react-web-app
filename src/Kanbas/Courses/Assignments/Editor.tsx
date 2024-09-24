export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a 
        link to the landing page of your Web 
        application running on Netlify. The landing 
        page should include the following: Your full 
        name and section Links to each of the lab 
        assignments Link to the Kanbas application 
        Links to all relevant source code repositories 
        The Kanbas application should include a link 
        to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
         
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignemnt Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="Percentage">Percentage</option>
                </select>
            </td>
        </tr>
        
        <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="Online">Online</option>
                </select>
  
                <td align="left" valign="top">
                    <label htmlFor="wd-editor-checkboxes">Online Entry Option</label><br/>
            
                    <input type="checkbox" name="Text Entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="Website URL" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>

                    <input type="checkbox" name="Media Recordings" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                    <input type="checkbox" name="Student Annotation" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="File Uploads" id="wd-file-upload"/>
                    <label htmlFor="wd-file-upload">File Uploads</label><br/>
                </td><br/>
                <td align="left" valign="top">
                    <label htmlFor="wd-assign-to">Assign to</label><br/>
                    <input id="wd-assign-to" defaultValue={"Everyone"} />
                </td><br/>
                
                <td align="left" valign="top">
                    <label htmlFor="wd-due-date">Due</label><br/>
                    <input type="date"
                    id="wd-due-date"
                    defaultValue="2024-05-13"/><br/>
                </td><br/>

                <td align="left" valign="top">
                    <label htmlFor="wd-available-from">Available from</label><br/>
                    <input type="date"
                    id="wd-available-from"
                    defaultValue="2024-05-06"/><br/>
                </td>
                <td align="left" valign="top">
                    <label htmlFor="wd-available-until">Until</label><br/>
                    <input type="date"
                    id="wd-available-until"
                    defaultValue="2024-05-20"/><br/>
                </td><br/>
                <hr />
                
            </td>
          
        </tr>
        <tr><br/>
            <td align="right" valign="bottom">
                <button id="wd-cancel">Cancel</button>
                <button id="wd-save">Save</button>
            </td> 
        </tr>
      
      </table>
    </div>
);}
