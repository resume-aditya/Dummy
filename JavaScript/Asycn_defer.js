// Asycn and defer are attribute on Script tag

// The async attribute is a boolean attribute
// If async is set : 
        // script will be downloaded in parallel to parsing/rendering the page
        // once downloaded, rendering of the page is interrupted
        // script is then exececuted
        // once execution is complete, rendering resumes

<script src="demo_async.js" async></script>
`----------------------------------------------------------------------`
// Defer
// Similar to async attribute
// Script is downloaded in parallel to Parsing/Rendering of page

// ****** BUT**********

// Once downloaded, rendering is NOT INTERRUPTED.
// Script is executed once rendeing completes

