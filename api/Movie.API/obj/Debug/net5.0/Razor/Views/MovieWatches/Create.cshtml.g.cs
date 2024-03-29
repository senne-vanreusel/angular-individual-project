#pragma checksum "C:\Thomas more\2022-2023\Angular\NET API\Movie.API\Views\MovieWatches\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "cf95f79b8d56fe290679f68ea78ddb2cc265ba65"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_MovieWatches_Create), @"mvc.1.0.view", @"/Views/MovieWatches/Create.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"cf95f79b8d56fe290679f68ea78ddb2cc265ba65", @"/Views/MovieWatches/Create.cshtml")]
    public class Views_MovieWatches_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Movie.DAL.Models.MovieWatch>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Thomas more\2022-2023\Angular\NET API\Movie.API\Views\MovieWatches\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>MovieWatch</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""Id"" class=""control-label""></label>
                <input asp-for=""Id"" class=""form-control"" />
                <span asp-validation-for=""Id"" class=""text-danger""></span>
            </div>
            <div class=""form-group form-check"">
                <label class=""form-check-label"">
                    <input class=""form-check-input"" asp-for=""Watched"" /> ");
#nullable restore
#line 22 "C:\Thomas more\2022-2023\Angular\NET API\Movie.API\Views\MovieWatches\Create.cshtml"
                                                                    Write(Html.DisplayNameFor(model => model.Watched));

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
                </label>
            </div>
            <div class=""form-group"">
                <label asp-for=""Rating"" class=""control-label""></label>
                <input asp-for=""Rating"" class=""form-control"" />
                <span asp-validation-for=""Rating"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Comment"" class=""control-label""></label>
                <input asp-for=""Comment"" class=""form-control"" />
                <span asp-validation-for=""Comment"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Create"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 47 "C:\Thomas more\2022-2023\Angular\NET API\Movie.API\Views\MovieWatches\Create.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Movie.DAL.Models.MovieWatch> Html { get; private set; }
    }
}
#pragma warning restore 1591
