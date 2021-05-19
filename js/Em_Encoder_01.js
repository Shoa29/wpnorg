// JavaScript Document Email Encoder
// old version document.write('<a href="mailto:'+account+'&#64;'+domain+'&#46;'+dotwhat+' title="'+subject+'">'+account+'&#64;'+domain+'&#46;'+dotwhat+'</a>');

function email_encoder(account,domain,dotwhat,subject)
{
document.write('<a href="mailto:'+account+'&#64;'+domain+'&#46;'+dotwhat+'?subject='+subject+'" title="'+subject+'">'+account+'&#64;'+domain+'&#46;'+dotwhat+'</a>');
}